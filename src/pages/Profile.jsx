import React from 'react'
import { Avatar, Box, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdOutlineDoneAll } from 'react-icons/md'

const Profile = () => {
  return (
    <Box p={6} display={'flex'} w={'100vw'} justifyContent={'space-evenly'}>
      <Box
        p={16}
        borderRadius={12}
        boxShadow={"0px 0px 7px 0px rgba(0, 0, 0, 0.25)"}
        display={'flex'}
        flexDirection={'column'}
        gap={5}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Avatar name='Dan Abrahmov' size="lg" src='https://bit.ly/dan-abramov' mb={3} />
          <Text color={"#0EA293"} fontSize={"24px"} fontWeight={500}>
            Debojit Saha
          </Text>
          <Text fontSize={"16px"} fontWeight={500}>
            He/him
          </Text>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
        >
          <Text fontSize={"22px"} fontWeight={500}>
            Stats
          </Text>
          <Box display={'flex'} alignItems={'center'} gap={2}>
            <GiReceiveMoney />
            <Text fontSize={"16px"} fontWeight={500}>
              Donated $50
            </Text>
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={2}>
            <MdOutlineDoneAll />
            <Text fontSize={"16px"} fontWeight={500}>
              6 Badges Earned
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Text color={"#0EA293"} fontSize={"28px"} fontWeight={500}>
          Earned Badges
        </Text>
        <Wrap mt={2}>
          <WrapItem>
            <Avatar name='Dan Abrahmov' size="lg" src='https://bit.ly/dan-abramov' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Kola Tioluwani' size="lg" src='https://bit.ly/tioluwani-kolawole' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Kent Dodds' size="lg" src='https://bit.ly/kent-c-dodds' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Ryan Florence' size="lg" src='https://bit.ly/ryan-florence' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Prosper Otemuyiwa' size="lg" src='https://bit.ly/prosper-baba' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Christian Nwamba' size="lg" src='https://bit.ly/code-beast' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Segun Adebayo' size="lg" src='https://bit.ly/sage-adebayo' />
          </WrapItem>
        </Wrap>
        <Wrap mt={2}>
          <WrapItem>
            <Avatar name='Dan Abrahmov' size="lg" src='https://bit.ly/dan-abramov' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Kola Tioluwani' size="lg" src='https://bit.ly/tioluwani-kolawole' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Kent Dodds' size="lg" src='https://bit.ly/kent-c-dodds' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Ryan Florence' size="lg" src='https://bit.ly/ryan-florence' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Prosper Otemuyiwa' size="lg" src='https://bit.ly/prosper-baba' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Christian Nwamba' size="lg" src='https://bit.ly/code-beast' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Segun Adebayo' size="lg" src='https://bit.ly/sage-adebayo' />
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  )
}

export default Profile