// @refresh reset
import React, { memo, useState, useEffect } from 'react';
import feedbackMessageService, { IMessage } from 'services/feedback';
import { concatMap, first, map, startWith } from 'rxjs/operators';
import { timer } from 'rxjs';

const FeedbackMessage = memo(() => {
  const [message, setMessage] = useState<IMessage>(undefined);

  useEffect(() => {
    feedbackMessageService
      .watch()
      .pipe(
        concatMap(message => {
          return timer(2500).pipe(
            first(),
            map<any, IMessage>(() => ({ ...message, text: null })),
            startWith(message)
          );
        })
      )
      .subscribe(res => {
        setMessage(res);
      });
  }, [message]);

  if (!message || !message.text) return null;

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
});
export default FeedbackMessage;
