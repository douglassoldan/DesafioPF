import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {FlatList, TextInput as NativeTextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-color: gray;
  border-width: 1px;
  margin: 10px;
  border-radius: 5px;
  position: relative;
`;

const TextInput = styled(NativeTextInput)`
  height: 40px;
  padding-left: 40px;
  flex: 1;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 15px;
  z-index: 1;
`;

type Product = {
  id: number;
  title: string;
};

const ProductList = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  useEffect(() => {
    if (searchText === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product =>
          product.title.toLowerCase().includes(searchText.toLowerCase()),
        ),
      );
    }
  }, [searchText, products]);

  return (
    <Container>
      <SearchContainer>
        <TextInput
          placeholder="Busque seus produtos aqui"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <SearchIcon icon={faSearch} size={20} color="gray" />
      </SearchContainer>
      <FlatList
        data={filteredProducts}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        // eslint-disable-next-line react-native/no-inline-styles
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </Container>
  );
};

export default ProductList;
