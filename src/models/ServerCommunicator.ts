import axios from 'axios'

interface BalanceInfo {
    balance: number
}

interface ExchangeRateInfo {
    valueof1Coin: number
}

type AccountType = 'bankaccount' | 'cryptoaccount'

class ServerCommunicator {
    private serverURL = 'http://129.107.117.121:8080'

    getUserName() {
        return new Promise<string>((resolve) => resolve('venom'))
    }

    getBankAccountBalance() {
        return this.getBalance('bankaccount')
    }

    getCryptoAccountBalance() {
        return this.getBalance('cryptoaccount')
    }

    getBalance(accountType: AccountType) {
        return new Promise<BalanceInfo>((resolve, reject) => {
            this.getUserName()
                .then((username) => {
                    axios.get<BalanceInfo>(`${this.serverURL}/${accountType}/user=${username}/balance`)
                        .then(result => {                            
                            resolve(result.data)
                        })
                        .catch(err => reject(err))
                })
        })
    }

    getExchangeRate() {
        return new Promise<ExchangeRateInfo>((resolve, reject) => {
            axios.get<ExchangeRateInfo>(`${this.serverURL}/exchange/rate`)
                .then(result => {
                    resolve(result.data)
                })
                .catch(err => reject(err))
        })
    }

    putRequestForTransfer(amount: number) {
        return new Promise<void>((resolve, reject) => {
            this.getUserName()
                .then((username) => {
                    axios.put<void>(`${this.serverURL}/exchange/user=${username}/coin2cash/amountIn=dollars/amount=${amount}`)
                        .then(() => {
                            resolve()
                        })
                        .catch(err => reject(err))
                })
        })
    }


}

export const serverCommunicator = new ServerCommunicator();