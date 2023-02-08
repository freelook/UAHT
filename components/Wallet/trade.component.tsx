import {Row, Button} from '@nextui-org/react';
import {ADDRESS, USDT_ADDRESS} from '@space/hooks/api';
import styles from './wallet.module.scss';

export const Trade = () => {
  return (
    <Row className={styles.row} justify="flex-start" align="center" wrap="wrap">
      <Button
        className={styles.button}
        size="sm"
        auto
        onClick={() => {
          window.open(`https://richamster.com/trade/MATIC_UAHT/?referral=nSMDbuIpnPdx`, '_blank');
        }}
      >
        Richamster
      </Button>
      <Button
        className={styles.button}
        size="sm"
        auto
        onClick={() => {
          window.open(
            `https://app.1inch.io/#/137/classic/limit-order/${USDT_ADDRESS}/${ADDRESS}`,
            '_blank'
          );
        }}
      >
        1inch
      </Button>
      <Button
        className={styles.button}
        size="sm"
        auto
        onClick={() => {
          window.open(`https://app.ws.exchange/ua/eth/polygon/swap?inputCurrency=MATIC`, '_blank');
        }}
      >
        WhiteSwap
      </Button>
      <Button
        className={styles.button}
        size="sm"
        color="gradient"
        auto
        onClick={() => {
          window.open(`https://app.uniswap.org/#/swap?chain=polygon&lng=uk-UA`, '_blank');
        }}
      >
        Uniswap
      </Button>
    </Row>
  );
};
