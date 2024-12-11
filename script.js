document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,toncoin&vs_currencies=usd,irr';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const usdToToman = 42000; // نرخ تبدیل فرضی دلار به تومان
            const eurToUsd = 1.1; // نرخ تبدیل فرضی یورو به دلار
            const eurToToman = eurToUsd * usdToToman;

            const btcToUsd = data.bitcoin.usd;
            const btcToToman = data.bitcoin.irr;
            const tonToUsd = data.toncoin.usd;
            const tonToToman = data.toncoin.irr;

            document.getElementById('usd-toman-value').textContent = usdToToman;
            document.getElementById('eur-usd-value').textContent = eurToUsd;
            document.getElementById('eur-toman-value').textContent = eurToToman;
            document.getElementById('btc-usd-value').textContent = btcToUsd;
            document.getElementById('btc-toman-value').textContent = btcToToman;
            document.getElementById('ton-usd-value').textContent = tonToUsd;
            document.getElementById('ton-toman-value').textContent = tonToToman;
        })
        .catch(error => console.error('Error fetching the exchange rates:', error));
});
