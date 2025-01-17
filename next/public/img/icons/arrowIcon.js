import { Icon, Box } from '@chakra-ui/react'

const ArrowIcon = ({widthIcon, heightIcon ,fill , ...style}) => (
  <Box 
    display="flex"
    alignItems="center"
    justifyItems="center"
    position="relative"
    {...style}
  >
    <Icon
      viewBox='0 0 25 19'
      width={widthIcon}
      height={heightIcon}
      fill={fill}
    >
      <path d="M1.84131 8.31894C1.15505 8.31894 0.598724 8.87526 0.598724 9.56152C0.598724 10.2478 1.15505 10.8041 1.84131 10.8041V8.31894ZM24.2894 10.4402C24.7746 9.9549 24.7746 9.16814 24.2894 8.68288L16.3816 0.775123C15.8963 0.289864 15.1096 0.289864 14.6243 0.775123C14.1391 1.26038 14.1391 2.04714 14.6243 2.5324L21.6534 9.56152L14.6243 16.5906C14.1391 17.0759 14.1391 17.8627 14.6243 18.3479C15.1096 18.8332 15.8963 18.8332 16.3816 18.3479L24.2894 10.4402ZM1.84131 10.8041H23.4107V8.31894H1.84131V10.8041Z"/>
    </Icon>
  </Box>
)

export default ArrowIcon