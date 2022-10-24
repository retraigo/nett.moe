export default function NeTT() {
  return (
    <div class="flex flex-col items-center mt-36">
      <div class="p-4">
        <div class="max-w-2xl rounded-xl w-full p-4">
          <div class="flex flex-col items-stretch space-y-8">
            <div class="shrink-0 flex justify-center overflow-hidden w-full lg:w-72 h-full lg:h-72 mx-auto rounded-full" id = "model_place">
              <vrm-component />
            </div>
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="text-3xl font-semibold">Pranev (NeTT)</div>
              <div class="text-2xl text-chaos-foreground">
                He who paints thy world in eternal nothingness
              </div>
              <div class="text-lg text-gray-400">
                ...and writes weird javascript programs and websites. Also makes
                up cringe monologues and narrations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
