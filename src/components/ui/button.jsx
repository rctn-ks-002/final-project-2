const { useRouter } = require('next/router');

function Button({
  children,
  className,
  text,
  eventHandler,
  to,
  tabIndex = '1',
}) {
  const router = useRouter();
  const switchRoute = () => router.push(`/${to}`);

  return (
    <button
      className={className}
      onClick={to ? switchRoute : eventHandler}
      type='button'
      tabIndex={tabIndex}
    >
      {children && text && text} {children || text}
    </button>
  );
}

export default Button;
