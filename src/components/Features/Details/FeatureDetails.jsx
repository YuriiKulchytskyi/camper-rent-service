import {
  DetailsContainer,
  DetailsItem,
  DetailsTitle,
  ListOfDetails,
  ValueOfDetail,
} from './FeaureDetails.styled';

export const FeatureDetails = ({ item }) => {
  const { form, length, width, height, tank, consumption } = item;

  return (
    <DetailsContainer>
      <DetailsTitle>Vehicle details</DetailsTitle>
      <ListOfDetails>
        <DetailsItem>
          <ValueOfDetail>Form</ValueOfDetail>
          <ValueOfDetail>{form}</ValueOfDetail>
        </DetailsItem>
        <DetailsItem>
          Length<ValueOfDetail>{length}</ValueOfDetail>
        </DetailsItem>
        <DetailsItem>
          Width<ValueOfDetail>{width}</ValueOfDetail>
        </DetailsItem>
        <DetailsItem>
          Height<ValueOfDetail>{height}</ValueOfDetail>
        </DetailsItem>
        <DetailsItem>
          Tank<ValueOfDetail>{tank}</ValueOfDetail>
        </DetailsItem>
        <DetailsItem>
          Consumption<ValueOfDetail>{consumption}</ValueOfDetail>
        </DetailsItem>
      </ListOfDetails>
    </DetailsContainer>
  );
};
