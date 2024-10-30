const backgroundImage = (props: { src: string }) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${props.src})` }}
    />
  );
};

export default backgroundImage;
