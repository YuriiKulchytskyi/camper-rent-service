import {
  EquipmentSection,
  Title,
  EquipmentSvg,
  EquipmentList,
  EquipmentItem,
  SvgDescription,
  Desc,
} from './Vehicle.styled';
import icons from '../../../images/icons.svg';

export const VehicleEquipment = () => {
  return (
    <EquipmentSection>
      <Title>Vehicle equipment</Title>
      <EquipmentList>
        <EquipmentItem>
          <SvgDescription>
            <EquipmentSvg>
              <use href={`${icons}#icon-wind-icon`}></use>
            </EquipmentSvg>
            <Desc>AC</Desc>
          </SvgDescription>
        </EquipmentItem>
        <EquipmentItem>
          <EquipmentSvg>
            <use href={`${icons}#icon-Container`}></use>
          </EquipmentSvg>
          <Desc>Automatic</Desc>
        </EquipmentItem>
        <EquipmentItem>
          <EquipmentSvg>
            <use href={`${icons}#icon-Horizontal-container`}></use>
          </EquipmentSvg>
          <Desc>Kitchen</Desc>
        </EquipmentItem>
        <EquipmentItem>
          <EquipmentSvg>
            <use href={`${icons}#icon-Vertical-container-1`}></use>
          </EquipmentSvg>
          <Desc>TV</Desc>
        </EquipmentItem>
        <EquipmentItem>
          <EquipmentSvg>
            <use href={`${icons}#icon-Rating`}></use>
          </EquipmentSvg>
          <Desc>Shower/WC</Desc>
        </EquipmentItem>
      </EquipmentList>
    </EquipmentSection>
  );
};
