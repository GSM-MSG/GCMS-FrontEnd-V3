export interface ClubProps {
  notion: boolean;
  href: string;
  clubName: string;
  description: string;
  recruitmentStatus: 'open' | 'closed' | 'attendee' | 'none';
  recruitmentCount?: number;
  attendeeCount?: number;
  totalMemberCount?: number;
}
