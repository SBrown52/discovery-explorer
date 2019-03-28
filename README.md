# discovery-explorer
These simple scripts connect to a running cube and print out a list of dimensions or measures contained in each one.

### Example
After performing `yarn install` or `npm install`, run one of the scripts, eg `node dimensions.js`. Running against the sandbox you will see:
```
EquityDerivativesCube
Underlyings
HostName
Currency
CounterParty
Geography
Trades
Booking
Time
TargetCurrency
Epoch
```
printed out to the console. You can redirect this to a file if required. The `measures.js` script works the same way. You can modifiy the scipts to print out other properties as well that come from the the discovery json object.
