import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import styled from 'styled-components/native';

const CardContainer = styled.View`
  width: 45%;
  border: 2px solid #f8f8f8;
  border-radius: 5px;
  overflow: hidden;
  margin: 2.5%;
  align-items: center;
`;

const CategoryContainer = styled.View`
  background-color: #281f67;
  padding: 5px 10px;
  border-radius: 20px;
  align-self: center;
  margin: 5px;
  margin-bottom: 20px;
`;

const CategoryText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 400;
  font-family: 'Roboto';
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: black;
  padding: 5px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const StyledDescription = styled.Text`
  color: #626262;
  padding: 5px;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 14px;
`;

const Price = styled.Text`
  color: #281f67;
  padding: 5px;
  margin-top: 10px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  flex: 1;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const CenteredView = styled.View`
  align-items: center;
`;

const ProductCard: React.FC<{product: any}> = ({product}) => {
  const navigation =
    useNavigation<StackNavigationProp<any, 'ProductDetails'>>();

  return (
    <CardContainer>
      <StyledTouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {product})}
        activeOpacity={0.7}>
        <CenteredView>
          <CategoryContainer>
            <CategoryText>{product.category}</CategoryText>
          </CategoryContainer>
          <ImageContainer>
            <StyledImage source={{uri: product.image}} resizeMode="contain" />
          </ImageContainer>
          <Title numberOfLines={3} ellipsizeMode="tail">
            {product.title}
          </Title>
          <Text numberOfLines={2} ellipsizeMode="tail">
            <StyledDescription>{product.description}</StyledDescription>
          </Text>
          <Price>{`R$${product.price}`}</Price>
        </CenteredView>
      </StyledTouchableOpacity>
    </CardContainer>
  );
};

export default ProductCard;
