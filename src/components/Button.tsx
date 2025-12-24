function Button(props: any) {
  return (
    <button
      className="flex flex-row justify-center items-center gap-2 bg-rose p-2 sm:rounded rounded-3xl text-white"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
