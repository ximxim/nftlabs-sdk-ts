import { BigNumberish } from "ethers";
import { CurrencyValue } from "../../common/currency";
import { NFTMetadata } from "../../common/nft";
import { ListingType } from "../../enums/marketplace";

/**
 * Represents a marketplace direct listing.
 */
export interface DirectListing {
  /**
   * The id of the listing.
   */
  id: string;

  /**
   * The address of the asset being listed.
   */
  assetContractAddress: string;

  /**
   * The ID of the token to list.
   */
  tokenId: BigNumberish;

  /**
   * The asset being listed.
   */
  asset: NFTMetadata;

  /**
   * The start time of the listing.
   */
  startTimeInSeconds: BigNumberish;

  /**
   * Number of seconds until the listing expires.
   */
  secondsUntilEnd: BigNumberish;

  /**
   * The quantity of tokens to include in the listing.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: BigNumberish;

  /**
   * The address of the currency to accept for the listing.
   */
  currencyContractAddress: string;

  /**
   * The `CurrencyValue` of the listing. Useful for displaying the price information.
   */
  buyoutCurrencyValuePerToken: CurrencyValue;

  /**
   * The buyout price of the listing.
   */
  buyoutPrice: BigNumberish;

  /**
   * The address of the seller.
   */
  sellerAddress: string;

  type: ListingType.Direct;
}
