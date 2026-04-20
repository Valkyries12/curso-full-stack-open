import Part from "./Part";

const Content = ({ parts }) => {
    return (
      <div>
        {
          parts.map((part) => <Part key={part.name} part={part.name} exercise={part.exercises} />)
        }
        {/*<Part part={part1.name} exercise={part1.exercises} />
        <Part part={part2.name} exercise={part2.exercises} />
        <Part part={part3.name} exercise={part3.exercises} />*/}
      </div>
    );
}

export default Content;