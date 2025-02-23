import { Link } from '@mui/material';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  to?: never;
};
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  to?: string;
};
function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return 'to' in props;
}

export default function Button(props: AnchorProps | ButtonProps) {
  if (isAnchorProps(props)) return <Link underline="always" {...props}></Link>;

  return <Button {...props}></Button>;
}
