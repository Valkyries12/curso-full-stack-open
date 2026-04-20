import Part from "./Part";

const Content = ({ part1, part2, part3 }) => {
    return (
      <div>
        <Part part={part1.name} exercise={part1.exercise} />
        <Part part={part2.name} exercise={part2.exercise} />
        <Part part={part3.name} exercise={part3.exercise} />
      </div>
    );
}

export default Content;