declare module "@svg-maps/usa" {

  const USA: {
    viewBox: string,
    locations: {
      path: string,
      id: string,
      name?: string
    }[],
    label?: string
  };

  export default map;
}
