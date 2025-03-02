import type { Dict } from '@/src/types'
import { Box, Flex, panda } from '@/styled-system/jsx'
import Image from 'next/image'
import { css, cx } from '@/styled-system/css'
import { Paragraph } from '@/src/components/paragraph'
import { button } from '@/src/components/button'
import Link from 'next/link'
import { Badge } from '@/src/components/badge'
import { FileIcon, SendIcon } from '@/src/icons'
import { iconStyles } from '@/src/components/layouts/overlay-menu'

export default function Hero({ dictionary }: Dict) {
  const { name, online, label, summary, email, cv } = dictionary.basics

  return (
    <Flex
      id="home"
      flexDirection="column"
      md={{ flexDirection: 'row' }}
      gap="4"
    >
      <Box flex="1">
        <Badge bordered="green" animation="pulse" radius="md">
          {online}
        </Badge>
        <panda.h2
          fontSize="5xl"
          fontWeight="bold"
          textWrap="balance"
          margin="0"
        >
          {name}
        </panda.h2>
        <Paragraph weight="md" size="lg">
          {label}
        </Paragraph>
        <Paragraph marginTop="10" color="neutral.500">
          {summary}
        </Paragraph>
        <Box marginTop="10">
          <Flex
            gap="4"
            flexDirection="column"
            md={{ gap: '8', flexDirection: 'row' }}
          >
            <Link
              href={`mailto:${email}`}
              className={cx(
                button({ radius: 'md' }),
                css({ fontWeight: 'semibold' }),
              )}
            >
              <SendIcon className={iconStyles} />
              Email
            </Link>
            <Link
              href={cv}
              className={cx(
                button({ radius: 'md' }),
                css({ fontWeight: 'semibold' }),
              )}
              target="_blank"
              download
            >
              <FileIcon className={iconStyles} />
              CV
            </Link>
          </Flex>
        </Box>
      </Box>
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Image
          src="/me.webp"
          alt="Sebastian"
          width={350}
          height={350}
          className={css({ borderRadius: '2xl' })}
          priority
        />
      </Box>
    </Flex>
  )
}
