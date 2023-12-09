import ColorWizard from "../islands/ColorWizard.tsx";
export default function Home() {
  return (
    <main class="flex-1 w-full max-w-10xl p-4 mx-auto md:px-8 py-4 mt-5">
      <div id="top" class="flex flex-col items-center space-y-72">
        <ColorWizard />
      </div>
    </main>
  );
}
