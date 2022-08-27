import { Flex } from '@chakra-ui/react';
import { VFC } from 'react';
import { useEffect } from 'react';
import { Editable as SlateEditable } from 'slate-react';

import { renderElement } from '../../lib/editor/plugins';

export const Editable: VFC<{ direction: 'vertical' | 'horizontal' }> = ({
  direction,
}) => {
  useEffect(() => {
    addEventListener('keyup', (eve) => {
      if (eve.keyCode == 9) {
        event.preventDefault();
        console.log('tab');
      }
      return removeEventListener('keyup', (eve) => {
        console.log();
      });
    });
  }, []);

  /*useEffect(() => {
    addEventListener('keydown', (even) => {
      onTextAreaKeyDown(event, this);
    });
    function onTextAreaKeyDown(event, object) {
      // キーコードと入力された文字列
      const keyCode = event.keyCode;
      const keyVal = event.key;

      // カーソル位置
      const cursorPosition = object.selectionStart;
      // カーソルの左右の文字列値
      const leftString = object.value.substr(0, cursorPosition);
      const rightString = object.value.substr(
        cursorPosition,
        object.value.length
      );

      // タブキーの場合
      if (keyCode === 9) {
        event.preventDefault(); // 元の挙動を止める
        // textareaの値をカーソル左の文字列 + タブスペース + カーソル右の文字列にする
        object.value = leftString + '\t' + rightString;
        // カーソル位置をタブスペースの後ろにする
        object.selectionEnd = cursorPosition + 1;
      }
    }
  });*/

  return (
    <Flex
      id="textArea"
      h="max-content"
      w="max-content"
      minH="full"
      minW="full"
      alignItems="center"
      flexDir={direction === 'vertical' ? 'row' : 'column'}
    >
      <SlateEditable
        id="tab_input"
        className="tab_input"
        placeholder="自由にお書き下さい。"
        style={{
          lineHeight: 2,

          height: '100%',
          width: '100%',

          maxHeight: direction === 'vertical' ? '40rem' : 'max-content',
          maxWidth: direction === 'horizontal' ? '40rem' : 'max-content',

          minHeight: direction === 'horizontal' ? '100%' : 0,
          minWidth: direction === 'vertical' ? '100%' : 0,

          paddingTop: direction === 'horizontal' ? '4rem' : '1rem',
          paddingBottom: direction === 'horizontal' ? '50vh' : '1rem',
          paddingRight: direction === 'vertical' ? '4rem' : '1rem',
          paddingLeft: direction === 'vertical' ? '50vw' : '1rem',

          writingMode:
            direction === 'horizontal'
              ? 'horizontal-tb'
              : direction === 'vertical'
              ? 'vertical-rl'
              : undefined,
        }}
        renderElement={renderElement}
      />
    </Flex>
  );
};
