import { ButtonBase, Link } from '@mui/material';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
  children: string;
  sx?: object;
};
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
  children: string;
  sx?: object;
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
          ...props.sx,
          fontSize: '1em',
          fontWeight: 'bold',
          textUnderlineOffset: '0.3em',
          paddingX: '0.3em',
        }}
        {...props}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <ButtonBase {...props} sx={props.sx}>
      {props.children}
    </ButtonBase>
  );
}
