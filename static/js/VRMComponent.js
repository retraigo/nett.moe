import * as THREE from "https://esm.sh/three@0.145.0";
import {
  GLTFLoader,
} from "https://esm.sh/three@0.145.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://esm.sh/three@0.145.0/examples/jsm/controls/OrbitControls.js";
import {
  VRMLoaderPlugin,
  VRMUtils,
} from "https://esm.sh/@pixiv/three-vrm@1.0.4";

class VRMComponent extends HTMLDivElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" })

    const container = document.createElement("div")
    container.style.width = "100%";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center"
    container.style.marginRight = "auto"
    container.style.marginLeft = "auto"

    const renderer = new THREE.WebGLRenderer();
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    console.log(renderer.domElement);

    // camera
    const camera = new THREE.PerspectiveCamera(
      30.0,
      window.innerWidth / window.innerHeight,
      0.1,
      20.0,
    );
    camera.position.set(0.0, 1.4, -1.5);
    camera.rotation.set(0, Math.PI, 0)



    const scene = new THREE.Scene();
    scene.background = "transparent";

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1.0, 1.0, 1.0).normalize();
    scene.add(light);

    // lookat target
    const lookAtTarget = new THREE.Object3D();
    camera.add(lookAtTarget);

    // gltf and vrm
    let currentVrm = undefined;
    const loader = new GLTFLoader();
    loader.crossOrigin = "anonymous";

    // Install GLTFLoader plugin
    loader.register((parser) => {
      return new VRMLoaderPlugin(parser);
    });

    loader.load(
      // URL of the VRM you want to load
      `/model/NeTTv7.vrm`,
      (gltf) => {
        const vrm = gltf.userData.vrm;

        // calling these functions greatly improves the performance
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);

        // Disable frustum culling
        vrm.scene.traverse((obj) => {
          obj.frustumCulled = false;
        });

        scene.add(vrm.scene);
        currentVrm = vrm;

        vrm.lookAt.target = lookAtTarget;
        console.log(vrm);
      },
    );
    // helpers
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // animate
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const deltaTime = clock.getDelta();

      if (currentVrm) {
        // update vrm
        currentVrm.update(deltaTime);
      }

      renderer.render(scene, camera);
    }

    animate();

    // mouse listener
    window.addEventListener("mousemove", (event) => {
      lookAtTarget.position.x = 10.0 *
        ((event.clientX - 0.5 * window.innerWidth) / window.innerHeight);
      lookAtTarget.position.y = -10.0 *
        ((event.clientY - 0.5 * window.innerHeight) / window.innerHeight);
    });

    this.shadowRoot.append(container)
  }
}

customElements.define("vrm-component", VRMComponent, {extends: "div"})