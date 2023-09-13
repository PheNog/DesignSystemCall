import { styled } from "./styles/index.ts"
import { VariantProps } from '@stitches/react'

// export type ButtonProps = {
//   size: 'small' | 'big'
// }

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      medium: {
        fontSize: 16,
        padding: '$3 $6',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = VariantProps<typeof styled.Button>