import { useState } from "preact/hooks";

//
//
//
//
//
//
//
//

const LALA = `Ļ̸̛̭̜̯̫̬̱͈̲̬̱̥͚̰͉̺̖̥̯̤̮̺͈͖͈̲͕͔̱̟̩̪͈͓̙̦͈͎̙͓͈̩̆͌͒̑̌̅̇̍͑̃͌̑͂͑̀ͅä̴̧̨̬̤̱̘͍̟͈̼̪̥͇͎͉̮̙̬͈̳̦̩̥̹̼̼͇̝̮̞̳̬̪̽̈́͒̈́̄̆̑̋͑̑͐̇͂̿͆́̈͛̂͘͘͘̕̚̕̚͝͠ ̶̧̡͎͎͈̤̦̘͖̺̙̺̺̤̤̮͕̪͚̫͌͆͊͌̋̀́̽͛̏̾̓̿̂͗̈́̐̃̋̐̔͗̐̽̔̑̕Ļ̴̢̧̧̤͚̠̻͖̪͇̦̲̠̺̣̹̟͔̯̱̹̖͍̗̼͚̫̙̘̱̲͇̞̥̗̬̳͍͍̲̠̤̲͇̮̉̃̅́̊̀̉̃̃̃͑̏͗̄̄̽̿͊̇̈́̈́̎̈̓̔́̂͐̔̎̾̽̾̚̕̕͘͜͝͠͝͝ͅạ̴̢̡̢̢̼̹̝͓̰̥̖̞͚̱̘̰̯̖̲̲͚͓͖̘̹̹̱̘̩̦̬͕̙̯͙̟͎̱̲͈͕̼̗̙̥͕̬̗̮͔͓̦̪̐̊̐̈́́̉̇̎͂̈̔̈̓̀̎̿̋̉͊̎͗̀͌͂̂̀͊̏̍̏̕͘̕̕͝͝͝͝ͅļ̷͚̰͖͔͇͖̹͖̲̦̝̭̦̰̱͗̓̿̐̂̆̈́͑̈̓̓͑̏̒͐̽̄̎̓̅̇̇̐͊̊̿͂̅́̑́̑͛͊̒͋̈̉̂̉̐̈́̉̎͛̉͒͘͘͘̕͝͠͝a̶̧̧̨̧̧̛̛̰̮̯̳̩̞͕̳͓̹̠̗̙̫̣͚̦̻͙̤̙͈̺̞̻̦̱̪͔̘̭͇͓͍̰̲̗̻̭̗̓̈́̏̄̉̈͒̀̓̽̈́̏̃́̃̓͊͒̑͒̿͆̎̅͛̈͆̓̂͊̅̃̔̑̍̈́͛͑̒̅̀̀͋̚͘͘͘͜͜͠͝͠͝ͅͅ`;

const LALADESC = `776879776f756c64796f75`;

//
//
//
//
//

interface CardPersonProps {
  name: string;
  title: string;
  description: string;
}

export default function CardPerson(props: CardPersonProps) {
  const [img, setImg] = useState(6);
  const increment = () => {
    if (img < 17) {
      setImg(img + 1);
    } else if (img !== 999) {
      setImg(999);
    } else return;
  };
  return (
    <div class="p-4">
      <div class="rounded-xl w-full p-4">
        <div class="flex flex-col lg:flex-row items-stretch lg:items-center gap-8">
          <div class="shrink-0 flex justify-center">
            <img
              src={`/variants/${img === 999 ? 999 : (img % 8) + 1}.webp`}
              class="object-cover rounded-full lg:rounded-none w-48 h-48 lg:w-96 lg:h-96"
              alt={props.title}
              title="I wanted to make an SVG version but I never got to it."
              onClick={increment}
            />
          </div>
          <div class="flex flex-col items-center text-center lg:text-left lg:items-start space-y-4">
            <div class="text-3xl font-semibold">
              {img === 999 ? LALA : props.name}
            </div>
            <div class="text-2xl text-chaos-foreground">
              {img === 999
                ? new Array(3 + Math.floor(Math.random() * 35)).fill(`A`).join(
                  "",
                )
                : props.title}
            </div>
            <div class="text-lg text-gray-400">
              {img === 999
                ? new Array(Math.ceil(Math.random() * 5)).fill(LALADESC).join(
                  "",
                )
                : props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
