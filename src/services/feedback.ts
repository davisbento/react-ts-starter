import { Observable, of, Subject } from 'rxjs';

export interface IMessage {
  text: string;
  icon?: string;
  type: 'success' | 'error';
  duration?: number;
}

export class FeedbackMessageService {
  private messages$ = new Subject<IMessage>();

  public show(text: string, icon?: string, type?: 'success' | 'error', duration?: number): Observable<void> {
    this.messages$.next({ text, icon, duration, type: type || 'success' });
    return of(null);
  }

  public error(error: any): Observable<void> {
    this.messages$.next({ text: error, type: 'error' });
    return of(null);
  }

  public watch(): Observable<IMessage> {
    return this.messages$.asObservable();
  }
}

const feedbackMessageService = new FeedbackMessageService();
export default feedbackMessageService;
