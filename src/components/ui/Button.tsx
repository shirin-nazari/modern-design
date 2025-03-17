import { Link } from '@mui/material';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href: string;
};
function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return 'href' in props;
}

export default function Button(props: AnchorProps | ButtonProps) {
  if (isAnchorProps(props)) {
    return (
      <Link
        underline="always"
        sx={{
          fontSize: '1em',
          fontWeight: 'bold',
          textUnderlineOffset: '0.3em',
          paddingX: '0.3em',
        }}
        {...props}
      ></Link>
    );
  }

  return <Button {...props}></Button>;
}
