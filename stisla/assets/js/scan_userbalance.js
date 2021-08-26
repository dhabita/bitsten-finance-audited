function aa() {
    for (a = 0; a < 12; a++) {
        WALLET.getBalanceWbst();
        WALLET.getBalanceBusd();
        WALLET.getBalanceLP(a);

        WALLET.getWalletLpBalance(a);

    }
}


setInterval(aa, 10000);
aa();