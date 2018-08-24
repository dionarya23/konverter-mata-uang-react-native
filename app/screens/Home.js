import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Button';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'IDR';
const PRICE_BASE_CURRENCY = '1';
const PRICE_QUOTE_CURRENCY = '14000';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date()

class Home extends Component {

    handleChangeText = () => {
        console.log('change text');
      };

    handleBaseCurrency () {
        console.log('press base')
    }

    handleQuoteCurrency () {
        console.log('press quote')
    }

    handleSwapCurrency () {
        console.log("Press Reverse")
    }
    
    render() {
        return (
            <Container>
            <StatusBar  translucent={false} barStyle="light-content" />
            <Logo />
            <View />
            <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={PRICE_BASE_CURRENCY}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          editable={false}
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          value={PRICE_QUOTE_CURRENCY}
        />

            <ClearButton
                text="Tukar Posisi"
                onPress={this.handleSwapCurrency}
            />
        </Container>
        )
    }
}

export default Home;