import caver from "klaytn/caver";
import ABI from "abi/boxABI.json";

/**
 * 1. Create contract instance
 * ex:) new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
 * You can call contract method through this instance.
 * Now you can access the instance by `this.countContract` variable.
 */

const boxContract = new caver.klay.Contract(
  ABI,
  "0xa72336cBb31af6e85AB1a816753aC9Ec38Cd95B5"
);

export default boxContract;
