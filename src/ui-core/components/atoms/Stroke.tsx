interface StrokeProps {
  colour: string;
  width: string;
  height: string;
}

const Stroke: React.FC<StrokeProps> = ({ colour, width, height }) => {
  return (
    <div
      className="rounded-[12px]"
      style={{
        backgroundColor: colour,
        width,
        height,
      }}
    ></div>
  );
};

export default Stroke;
