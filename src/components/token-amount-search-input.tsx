import {TokensOptionalRequestPayloadDTO} from "../store/tokens-store-slice/dtos/tokens-optional-request-payload.dto";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";

export function TokenAmountSearchInput(): JSX.Element {

    const optionalRequestPayloadDTO :TokensOptionalRequestPayloadDTO = {};

    return (
        <div className="mb-3 xl:w-96">

        <label htmlFor="tokensAmountSearchInput" className="form-label inline-block mb-2 text-gray-700 text-sm"
        >Quantity</label>

        <input
          id="tokensAmountSearchInput"
          placeholder="insert token(s) quantity"
          type="number"
          min="1"
          max="100"
          onChange={(event) => {
              optionalRequestPayloadDTO.amount = parseInt(event.target.value);
              Eventbus.emit(EventTypesConstants.UPDATE_TOKEN_SEARCH_REQUEST,optionalRequestPayloadDTO);
          }}
          className="form-control block w-full px-2 py-1
          text-sm font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />

        </div>);
}
