import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState, VFC } from 'react';
import {
  HiMoon,
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowRight,
  HiSun,
} from 'react-icons/hi';
import { Node } from 'slate'; //ここをたどってルール変更
import { Slate } from 'slate-react';

import { Editable } from '../components/Editable/Editable';
import { Logo } from '../components/Logo';
import { useDirection } from '../lib/direction';
import { createEditor } from '../lib/editor/plugins';

const IndexPage: VFC = () => {
  const [editor] = useState(createEditor);
  const { direction, toggleDirection } = useDirection();
  const { colorMode, toggleColorMode } = useColorMode();

  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);
  const s = value[0].children[0].text;
  console.log(s);

  //ここから
  const general = () => {
    //最初のtabだけ実装できていない\t
    const ruleCheck = /\[[1-9]\]/.test(s);
    //const ru = s.match(/[ [ 1-9 \]A-Z]/)
    return console.log(ruleCheck);
  };

  console.log(Box.name);
  console.log(Slate.name);
  general();

  /*  for (let i = 0; i < s.length; i++) {
    s[i].addEventListener('keydown', input_tab)
  }

  function input_tab(event: any) {
    if (event.key === 'Tab') {
      // デフォルト動作停止
      
      //  Tabを挿入。範囲指定時は置換。
      const TAB = '\t'
      const value = this.value
      const sPos = this.selectionStart
      const ePos = this.selectionEnd
      const result = value.slice(0, sPos) + TAB + value.slice(ePos)
      const cPos = sPos + TAB.length
      this.value = result
      this.setSelectionRange(cPos, cPos)
    }
  }
*/

  return (
    <>
      <Head>
        <title>INIAD IE</title>
      </Head>
      <ButtonGroup p="2" position="fixed" top="0" left="0" id="a">
        <Button variant="ghost" p="2">
          <Box as="span" display="inline-block" h="10" w="10" id="b">
            <Logo />
          </Box>
        </Button>
      </ButtonGroup>
      <Slate
        id="cjdfa"
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)} //ここでテキスト更新
      >
        <Editable direction={direction}></Editable>
        <ButtonGroup p="2" position="fixed" bottom="0" right="0">
          <IconButton
            colorScheme="gray"
            variant="ghost"
            p="2"
            onClick={toggleDirection}
            aria-label={
              direction === 'horizontal'
                ? '縦書きで表示する'
                : '横書きで表示する'
            }
            icon={
              <Box
                id="d"
                as="span"
                display="inline-block"
                position="relative"
                h="6"
                w="6"
              >
                <Box
                  id="e"
                  as="span"
                  fontSize="xs"
                  position="absolute"
                  top="0"
                  left="0"
                  aria-hidden="true"
                >
                  あ
                </Box>
                {direction === 'horizontal' ? (
                  <HiOutlineArrowNarrowRight
                    id="g"
                    style={{
                      position: 'absolute',
                      width: '1.5rem',
                      height: '1.5rem',
                      bottom: '-0.5rem',
                      right: 0,
                    }}
                  />
                ) : (
                  <HiOutlineArrowNarrowDown
                    id="f"
                    style={{
                      position: 'absolute',
                      width: '1.5rem',
                      height: '1.5rem',
                      bottom: 0,
                      right: '-0.5rem',
                    }}
                  />
                )}
              </Box>
            }
          />

          <IconButton
            colorScheme="gray"
            variant="ghost"
            p="2"
            onClick={toggleColorMode}
            aria-label={
              colorMode === 'light'
                ? 'ダークモードにする'
                : 'ライトモードにする'
            }
            icon={<Icon as={colorMode === 'light' ? HiMoon : HiSun} />}
          />
        </ButtonGroup>
      </Slate>
    </>
  );
};

export default IndexPage;
