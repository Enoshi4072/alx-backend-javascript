import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([userResult, photoResult]) => ([
      { status: userResult.status, value: userResult.status === 'fulfilled' ? userResult.value : String(userResult.reason) },
      { status: photoResult.status, value: photoResult.status === 'fulfilled' ? photoResult.value : String(photoResult.reason) }
    ]));
}
