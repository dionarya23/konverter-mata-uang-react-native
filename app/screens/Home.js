import React, {Component} from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Button';
import {LastConverted} from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'IDR';
const PRICE_BASE_CURRENCY = '1';
const PRICE_QUOTE_CURRENCY = '14000';
const TEMP_CONVERSION_RATE = 14000;
const TEMP_CONVERSION_DATE = new Date()

class Home extends Component {
    static propsTypes = {
        navigation : PropTypes.object,
    }

    handleChangeText = () => {
        console.log('change text');
      };

    handleBaseCurrency () {
        this.props.navigation.navigate('CurrencyList');
    }

    handleQuoteCurrency () {
        this.props.navigation.navigate('CurrencyList');
    }

    handleSwapCurrency () {
        console.log("Press Reverse")
    }

    handleOptionPress () {
        console.log("Press Option")
    }
    
    render() {
        return (
        <Container>
            <StatusBar  translucent={false} barStyle="light-content" />
            <Header onPress={this.handleOptionPress} />

            <KeyboardAvoidingView behavior="padding">
            <Logo />
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

        <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
        />

            <ClearButton
                text="Reverse Currencies"
                onPress={this.handleSwapCurrency}
            />
        </KeyboardAvoidingView>
        
        </Container>
        )
    }
}

export default Home;
