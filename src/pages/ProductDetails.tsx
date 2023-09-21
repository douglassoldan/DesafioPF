import React from 'react';
import styled from 'styled-components/native';
import {Animated, Button, StyleSheet} from 'react-native';
import {RouteProp, NavigationProp} from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: white;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.Text`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
`;

const ProductDescription = styled.Text`
  margin-bottom: 15px;
  font-size: 14px;
`;

const CartIcon = styled.Text`
  font-size: 80px;
`;

type ProductDetailsRouteProp = RouteProp<
  {
    ProductDetails: {
      product: {image: string; title: string; description: string};
    };
  },
  'ProductDetails'
>;

type ProductDetailsProps = {
  route: ProductDetailsRouteProp;
  navigation?: NavigationProp<any, 'ProductDetails'>;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({route}) => {
  const {product} = route.params;

  const cartPosition = new Animated.Value(500);

  const handleBuy = () => {
    cartPosition.setValue(500);

    Animated.timing(cartPosition, {
      toValue: -500,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container>
      <ProductImage source={{uri: product.image}} resizeMode="contain" />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <Button title="Comprar agora" onPress={handleBuy} />
      <Animated.View
        style={[styles.cart, {transform: [{translateX: cartPosition}]}]}>
        <CartIcon>🛒</CartIcon>
      </Animated.View>
    </Container>
  );
};

const styles = StyleSheet.create({
  cart: {
    position: 'absolute',
    bottom: 50,
  },
});

export default ProductDetails;
