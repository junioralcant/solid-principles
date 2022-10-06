export type CreateOrderGatewayDTO = {
  id: string;
  document: string;
  total: number;
  createdAt: Date;
  facilityId: string;
};
