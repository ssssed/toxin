import { Checkbox } from '@/shared/ui/chekbox';
import { Container } from '@/shared/ui/container';
import { Label } from '@/shared/ui/label';
import { Text } from '@/shared/ui/text';
import { useUnit } from 'effector-react';
import {
  $hasAssistantForDisabled,
  $isWide,
  assistantForDisabledChange,
  wideChange,
} from '../../model';

export const Accessibility = () => {
  const [isWide, hasAssistantForDisabled] = useUnit([
    $isWide,
    $hasAssistantForDisabled,
  ]);

  const handleToggleWide = () => wideChange(!isWide);
  const handleToggleAssistantForDisabled = () =>
    assistantForDisabledChange(!hasAssistantForDisabled);

  return (
    <Container
      direction='column'
      gap={17}
    >
      <Label>Доступность</Label>
      <Container
        direction='column'
        gap={12}
      >
        <Checkbox
          name='isWide'
          checked={isWide}
          onChange={handleToggleWide}
        >
          <Container
            direction='column'
            gap={5}
          >
            <h4>Широкий коридор</h4>
            <p>Ширина коридоров в номере не менее 91 см.</p>
          </Container>
        </Checkbox>
        <Checkbox
          name='hasAssistantForDisabled'
          checked={hasAssistantForDisabled}
          onChange={handleToggleAssistantForDisabled}
        >
          <Container
            direction='column'
            gap={5}
          >
            <h4>Помощник для инвалидов</h4>
            <Text type='light'>
              На 1 этаже вас встретит специалист и проводит до номера.
            </Text>
          </Container>
        </Checkbox>
      </Container>
    </Container>
  );
};
