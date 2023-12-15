const TextError = (props: any) => {
  const { children } = props;

  return <div className='ml-6 text-red-600'>{children}</div>;
};

export default TextError;
