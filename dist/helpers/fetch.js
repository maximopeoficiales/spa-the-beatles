export async function getFetch(props) {
  let { url, OnSuccess, cbError } = props;
  try {
    let response = await fetch(url);
    if (response.ok) OnSuccess(await response.json());
  } catch (error) {
    console.warn(error);
    cbError(error);
  }
}
