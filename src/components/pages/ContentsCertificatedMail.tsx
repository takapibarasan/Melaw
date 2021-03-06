import React, { FC } from 'react';
import { Button, Text } from 'react-native-elements';
import { ScrollView, View, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import LendMoney from '../organisms/ContentsCertificatedMail/LendMoney';
import TrafficAccident from '../organisms/ContentsCertificatedMail/TrafficAccident';
import SecurityDeposit from '../organisms/ContentsCertificatedMail/SecurityDeposit';
import TradingValue from '../organisms/ContentsCertificatedMail/TradingValue';
import Information from '../organisms/ContentsCertificatedMail/Information';
import Salary from '../organisms/ContentsCertificatedMail/Salary';
import SNS from '../organisms/ContentsCertificatedMail/SNS';
import Bank from '../molecules/Bank';
import PersonInfoInputForm from '../organisms/PersonInfoInputForm';
import { styles } from '../../styles/form';
import {
  blankContentsCertifiedMailCommon,
  blankContentsCertifiedMailInformation,
  blankContentsCertifiedMailSalary,
  blankContentsCertifiedMailTradingValue,
  blankContentsCertifiedMailSecurityDeposit,
  blankContentsCertifiedMailTrafficAccident,
  blankContentsCertifiedMailLendMoney,
} from '../../models/contents-certified-mail';

type Props = {
  type: string;
};

const ContentsCertificatedMail: FC<Props> = ({ type }) => {
  const ref = firestore().collection('contentsCertificatedMail');
  const user = auth().currentUser;
  const common = blankContentsCertifiedMailCommon;
  const information = blankContentsCertifiedMailInformation;
  const salary = blankContentsCertifiedMailSalary;
  const tradingValue = blankContentsCertifiedMailTradingValue;
  const securityDeposit = blankContentsCertifiedMailSecurityDeposit;
  const trafficAccident = blankContentsCertifiedMailTrafficAccident;
  const lendMoney = blankContentsCertifiedMailLendMoney;
  const addDoc = async () => {
    await ref.add({
      ...common,
      ...lendMoney,
      user: user.uid,
    });
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.title}>????????????????????????????????????</Text>
      <Text style={styles.description}>
        ?????????????????????????????????????????????????????????
      </Text>
      <PersonInfoInputForm
        name={common.name}
        postCode={common.postCode}
        prefecture={common.prefecture}
        city={common.city}
        building={common.building}
        company={common.company}
        position={common.position}
        businessType={common.businessType}
      />
      <Text style={styles.description}>
        ????????????????????????????????????????????????????????????
      </Text>
      <PersonInfoInputForm
        name={common.oppositeName}
        postCode={common.oppositePostCode}
        prefecture={common.oppositePrefecture}
        city={common.oppositeCity}
        building={common.oppositeBuilding}
        company={common.oppositeCompany}
        position={common.oppositePosition}
        businessType={common.oppositeBusinessType}
      />
      {type === '????????????' ? <SNS /> : <></>}
      {type === '????????????' ? <Information model={information} /> : <></>}
      {type === '????????????' ? <Salary model={salary} /> : <></>}
      {type === '??????????????????' ? <TradingValue model={tradingValue} /> : <></>}
      {type === '??????????????????' ? (
        <SecurityDeposit model={securityDeposit} />
      ) : (
        <></>
      )}
      {type === '??????????????????' ? (
        <TrafficAccident model={trafficAccident} />
      ) : (
        <></>
      )}
      {type === '??????????????????' ? <LendMoney model={lendMoney} /> : <></>}
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.label}>?????????????????????????????????</Text>
        <Text style={styles.optional}>??????</Text>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <TextInput
          style={styles.numberInput}
          maxLength={3}
          keyboardType="numeric"
          placeholder="10"
          value={common.dueDate}
          onChangeText={(value) => {
            common.dueDate = value;
          }}
        />
        <Text style={styles.text}>?????????</Text>
      </View>
      <Text style={styles.description}>
        ?????????????????????????????????????????????????????????
      </Text>
      <Bank
        bank={common.bank}
        branch={common.branch}
        accountType={common.accountType}
        account={common.account}
        accountHolder={common.accountHolder}
      />
      <Button
        title="??????"
        type="solid"
        buttonStyle={styles.button}
        raised
        onPress={() => addDoc()}
      />
    </ScrollView>
  );
};

export default ContentsCertificatedMail;
