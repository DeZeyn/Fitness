import reactImgFit from "../assets/Homelogo.svg";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header className="mx-5">
      <h1 className="text-hd1 font-standard font-bold text-fitness-color-light mt-10">
        Hi Maria!
      </h1>
      <img className="mt-4 mb-8" src={reactImgFit} alt="Workout lady" />

      <section className="flex flex-row justify-between mb-4">
        <h2 className="text-hd2 font-standard font-bold text-fitness-color-light leading-none">
          Dein Workout heute
        </h2>
        <p className="text-fitness-color-light font-standard text-sm self-end leading-tight">
          Trainingsplan
        </p>
      </section>
      <article className="bg-fitness-color-medium h-56 rounded-3xl mt-2 p-5 flex flex-col justify-end">
        <a href={`/programs`}>Programs</a>
        <h3 className="text-hd3 font-standard text-fitness-color-light">
          Tag 2
        </h3>
        <h2 className="text-hd2 font-standard font-bold text-fitness-color-light">
          Titel des Programms
        </h2>
        <p className="text-fitness-color-light font-sans text-sm">
          {description}
        </p>
      </article>
    </header>
  );
}
