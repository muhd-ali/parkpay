import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Grid, Card, CardActionArea, CardContent, Typography, Divider, CardHeader } from '@material-ui/core';
import { serverCommunicator } from 'models/ServerCommunicator';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
});
export interface MainProps extends WithStyles<typeof styles> {
    theme: Theme,
}

interface MainState {
    bankBalance: number
    cryptoBalance: number
    valueof1Coin: number
}

class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props)
        this.state = {
            bankBalance: 0.0,
            cryptoBalance: 0.0,
            valueof1Coin: 0.0,
        }
        this.getData()
    }

    getData() {
        this.getBankBalance()
        this.getCryptoBalance()
        this.getExchangeRate()
    }

    getBankBalance() {
        serverCommunicator.getBankAccountBalance()
            .then((balance) => {
                this.setState({ bankBalance: balance.balance })
            })
    }

    getCryptoBalance() {
        serverCommunicator.getCryptoAccountBalance()
            .then((balance) => {
                this.setState({ cryptoBalance: balance.balance })
            })
    }

    getExchangeRate() {
        serverCommunicator.getExchangeRate()
            .then((exchange) => {
                this.setState({ valueof1Coin: exchange.valueof1Coin })
            })
    }

    render() {
        let { classes } = this.props;
        return (
            <div className={classes.toolbar}>
                <Paper>
                    <Grid container spacing={24} justify='space-around'>
                        <Grid item lg={12}>
                            <Typography
                                style={{ padding: '30px' }}
                                variant='h4'
                                component='h2'
                            >
                                Welcome to BlockRedit.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} justify='space-around'>
                        <Grid item lg={11}>
                            <Card>
                                <CardHeader title='Exchange Rate' />
                                <Divider />
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant='subtitle1' color='textSecondary'>
                                            Price
                                        </Typography>
                                        <Typography variant='button'>
                                            ${this.state.valueof1Coin}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} justify='space-around'>
                        <Grid item lg={5}>
                            <Card>
                                <CardHeader title='Bank Account' />
                                <Divider />
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant='subtitle1' color='textSecondary'>
                                            Current Balance
                                        </Typography>
                                        <Typography variant='button'>
                                            ${this.state.bankBalance}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={5}>
                            <Card>
                                <CardHeader title='Crypto Account' />
                                <Divider />
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant='subtitle1' color='textSecondary'>
                                            Current Balance
                                        </Typography>
                                        <Typography variant='button'>
                                            {this.state.cryptoBalance}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Main);