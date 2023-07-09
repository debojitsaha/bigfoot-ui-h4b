import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import "../styles/Calculator.scss"
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Contact = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} pr={6} py={14} alignItems={'center'}>
      <Box bgColor={"#06B5A3"} ml={-24} p={36} pl={40} borderRadius={'50%'} w={'40%'}>
        <Text color={"#ffffff"} fontSize={"28px"} fontWeight={500}>
          Let's Talk?
        </Text>
        <Text color={"#ffffff"} fontSize={"16px"}>
          We'd love to hear from you!
        </Text>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <AiOutlineMail color='white' size={"16px"} />
          <Text color={"#ffffff"} fontSize={"16px"} fontWeight={500}>
            contact@bigfoot.org
          </Text>
        </Box>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <BiPhoneCall color='white' size={"16px"} />
          <Text color={"#ffffff"} fontSize={"16px"} fontWeight={500}>
            Phone
          </Text>
        </Box>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <HiOutlineLocationMarker color='white' size={"20px"} />
          <Text color={"#ffffff"} fontSize={"16px"} fontWeight={500}>
            Sister Nivedita University, Kolkata, WB
          </Text>
        </Box>
      </Box>
      <Box w={'60%'} display={'flex'} flexDirection={'column'} gap={8} alignItems={'end'}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
          />
          <label htmlFor="text1">Name</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="email"
            id="email"
            placeholder=" "
          />
          <label htmlFor="text1">Email</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="message"
            id="message"
            placeholder=" "
          />
          <label htmlFor="text1">Message</label>
        </div>        
        <Button bgColor='#27E1C1' color={'white'} width={'200px'} borderRadius={'30px'}>Send</Button>
      </Box>
    </Box>
  )
}

export default Contact