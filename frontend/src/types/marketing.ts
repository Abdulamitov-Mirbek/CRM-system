export interface Review {
  id: string;
  contactId: string;
  contactName: string;
  rating: number;
  comment?: string;
  response?: string;
  responderName?: string;
  createdAt: string;
}

export interface MailingCampaign {
  title: string;
  content: string;
  type: 'Email' | 'SMS' | 'WhatsApp';
  campaignType: 'Birthday' | 'Inactive' | 'Promotion' | 'Personal';
}
