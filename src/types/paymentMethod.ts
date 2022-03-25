/* eslint-disable camelcase */

export interface NewPaymentMethod {
  name: string;
  metadata?: { [index: string]: string | number | boolean },
  billing_details: {
    address?: {
      city?: string,
      country?: string,
      line1?: string,
      line2?: string,
      postal_code?: string,
      state?: string,
    },
    email?: string,
    name: string,
    phone?: string,
  },
  card: {
    checks?: {
      address_line1_check?: string,
      address_postal_code_check?: string,
      cvc_check?: string
    },
    number: string,
    exp_month: number,
    exp_year: number,
    cvv: number,
    fingerprint?: string,
    three_d_secure_usage?: {
      supported: boolean,
    },
  }
}

export interface PaymentMethodInstance {
  id: string;
  object: 'payment_method',
  name: string;
  created: number,
  customer?: string,
  livemode: boolean,
  metadata: { [index: string]: string | number | boolean },
  type: 'card',
  billing_details: {
    address: {
      city?: string,
      country?: string,
      line1?: string,
      line2?: string,
      postal_code?: string,
      state?: string,
    },
    email?: string,
    name?: string,
    phone?: string,
  },
  card: {
    brand: string,
    checks: {
      address_line1_check?: string,
      address_postal_code_check?: string,
      cvc_check?: string
    },
    country: string,
    exp_month: number,
    exp_year: number,
    fingerprint: string,
    funding: string,
    generated_from?: string,
    last4: string,
    networks: {
      available: string[],
      preferred?: string
    },
    three_d_secure_usage: {
      supported: boolean,
    },
    wallet?: string,

    number: string;
    month: string;
    year: string;
    cvv: string;
  }
}

export interface PaymentMethod {
  id: string;
  object: 'payment_method',
  name: string;
  created: number,
  customer?: string,
  livemode: boolean,
  metadata: { [index: string]: string | number | boolean },
  type: 'card',
  billing_details: {
    address: {
      city?: string,
      country?: string,
      line1?: string,
      line2?: string,
      postal_code?: string,
      state?: string,
    },
    email?: string,
    name?: string,
    phone?: string,
  },
  card: {
    brand: string,
    checks: {
      address_line1_check?: string,
      address_postal_code_check?: string,
      cvc_check?: string
    },
    country: string,
    exp_month: number,
    exp_year: number,
    fingerprint: string,
    funding: string,
    generated_from?: string,
    last4: string,
    networks: {
      available: string[],
      preferred?: string
    },
    three_d_secure_usage: {
      supported: boolean,
    },
    wallet?: string,

    number: string;
    month: string;
    year: string;
    cvv: string;
  }
}
export default PaymentMethod;
