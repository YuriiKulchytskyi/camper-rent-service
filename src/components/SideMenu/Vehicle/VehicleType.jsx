import {
  Section,
  Title,
  ListOfTypes,
  ListOption,
  TypeSvg,
  SvgDescription,
  Desc,
} from './Vehicle.styled';
import icons from '../../../images/icons.svg';

export const VehicleType = () => {
  return (
    <Section>
      <Title>Vehicle type</Title>
      <ListOfTypes>
        <ListOption>
          <SvgDescription>
            <TypeSvg>
              <use href={`${icons}#icon-Button-2`}></use>
            </TypeSvg>
            <Desc>Van</Desc>
          </SvgDescription>
        </ListOption>
        <ListOption>
          <SvgDescription>
            <TypeSvg>
              <use href={`${icons}#icon-Button-1`}></use>
            </TypeSvg>
            <Desc>Fully Integrated</Desc>
          </SvgDescription>
        </ListOption>
        <ListOption>
          <SvgDescription>
            <TypeSvg>
              <use
                width={'40px'}
                height={'28px'}
                href={`${icons}#icon-camper`}
              ></use>
            </TypeSvg>
            <Desc>Alcove</Desc>
          </SvgDescription>
        </ListOption>
      </ListOfTypes>
    </Section>
  );
};
