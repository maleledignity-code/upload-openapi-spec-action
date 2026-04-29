// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Hh } from '../client';

export abstract class APIResource {
  protected _client: Hh;

  constructor(client: Hh) {
    this._client = client;
  }
}
