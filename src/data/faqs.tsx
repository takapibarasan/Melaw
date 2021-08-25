import { FC } from 'react';

export type FAQ = {
  title: string;
  content: string;
};

export const faqData: FAQ[] = [
  {
    title: '少額訴訟とは',
    content: `少額訴訟とは、60万円以下の金銭の支払いを求める場合に利用できる訴訟手続きです。原則1回の期日（1日）で審理が終了することから、通常の訴訟より短期間で問題解決を図ることができます。

    【少額訴訟の流れ】
    ①　訴訟を起こした原告側が金銭の支払いを要求します。
    ②　訴訟を起こされた被告側がこれに対する主張を述べます。
    ③　証拠や証人等を調べたうえで、裁判官が判決を言い渡します。
    　→被告側に支払義務があるという判決を下された場合も、分割払いが認められたり、支払猶予期間が設けられたりすることがあります。
    　　また、通常の訴訟と同様に、訴訟の途中で和解が成立する場合もあります。
    `,
  },
  {
    title: '少額訴訟するメリット',
    content: `①訴訟をしなかった場合と比較し、金銭を回収できる可能性が高まる

少額訴訟で判決が出たにもかかわらず、相手が支払いに応じない場合、
少額訴訟債権執行という手続きにより、相手方の財産を差し押さえることができます。
少額訴訟債権執行で差し押さえできる財産は、次の通りです。

 (1) 相手方名義の預貯金
 (2) 相手が雇い主から受け取る給料
 (3) 所有不動産の入居者から相手が受け取る家賃収入

一般的に、財産の差し押さえは強制執行と呼ばれます。
強制執行で差し押さえできる財産は、預貯金や給料だけでなく、不動産や自動車、貴金属など多岐にわたります。

しかし、強制執行の手続きは複雑で、手間がかかるため、
少額訴訟においては、簡単に手続きができる少額訴訟債権執行という制度が設けられています。

少額訴訟債権執行でどの財産を差し押さえるかは、基本的に申立人（支払いを請求する側）が決めることができます。
ただし、相手にどのような財産があるかは、申立人が調査して突き止めなければいけません。

② 通常訴訟よりも手続きが簡単で、かつ時間がかからない
少額訴訟の手続きは一般的な訴訟と比べて簡易的です。
原則として即日判決が言い渡されますので、通常訴訟と比べると負担が少ないというメリットがあります。

③ 通常訴訟よりも費用が安い
少額訴訟は、通常訴訟と比べて申立費用が低額です。
また、弁護士に依頼しなくても個人で訴訟が提起できるので弁護士費用を抑えることができます。

→本アプリでは弁護士を通さず、個人による少額訴訟の提起をサポートします。
    `,
  },
  {
    title: `少額訴訟を利用できるケース`,
    content: `① 請求金額上限が60万円以下である
    少額訴訟は60万円以下の請求金額を対象としています。
    ただし、訴額60万円には利息や違約金は含まれていないので、
    利息や違約金を差し引いた請求金額が、60万円以下であれば少額訴訟の申立は可能です。
    
    ② 少額訴訟回数が年に10回以下である
    少額訴訟を同じ裁判所で利用できる回数は、年に10回までとなります。
    消費者金融など、多数の少額債権を所有する債権者が、少額訴訟制度を多用することを防止するために、回数制限が設けられています。
    
    ③ 被告の住所が明確である
    少額訴訟は、単純な金銭債権であれば債権者(原告)の住所(店舗であれば店舗所在地)を管轄する簡易裁判所で行うことができますが、
    訴状は必ず債務者である被告に送達（送付）が必要です。
    そのため、債務者である被告の住所地が不明な場合、訴状を送達できず、少額訴訟そのものを提起できません。
    
    ※本アプリでは、基本的に被告の住所特定についてはサポートしていませんが、
    　例外として「SNSで受けた誹謗中傷に対する慰謝料請求」については、他の類型よりも被告が不明の場合が多いと思いますので、
    　被告の住所特定までの道筋をサポートしています。
    
    ④ 相手側が弁護士に依頼していない
    相手側が弁護士に依頼している場合、少額訴訟を提起しても、通常訴訟への移行を求められることがあります。
    この場合は二度手間となってしまうので、こちらも弁護士に依頼し、通常裁判を申立てた方がよいでしょう。
    `,
  },
  {
    title: `少額訴訟支援アプリ『Melaw』でできること`,
    content: `少額訴訟とは、60万円以下の金銭の支払いを求める場合に利用できる訴訟手続きです。原則1回の期日（1日）で審理が終了することから、通常の訴訟より短期間で問題解決を図ることができます。

    【少額訴訟の流れ】
    ①　訴訟を起こした原告側が金銭の支払いを要求します。
    ②　訴訟を起こされた被告側がこれに対する主張を述べます。
    ③　証拠や証人等を調べたうえで、裁判官が判決を言い渡します。
    　→被告側に支払義務があるという判決を下された場合も、分割払いが認められたり、支払猶予期間が設けられたりすることがあります。
    　　また、通常の訴訟と同様に、訴訟の途中で和解が成立する場合もあります。
    `,
  },
  {
    title: `少額訴訟支援アプリ『Melaw』の使い方`,
    content: `トップページの「新規書類作成」より訴えたい訴訟類型を選択し、フローに沿って書類作成などについて、ご対応ください。
    作成中及び作成の完了した書類は、トップページに一覧で表示されます。後からでも、編集やPDF出力を実施することができます。
    
    証拠となる画像の保存は、トップページの「証拠の保存」か、それぞれの訴訟類型のフローにおける「証拠の保存」で実施することができます。
    `,
  },
];