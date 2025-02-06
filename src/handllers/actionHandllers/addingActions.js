export async function addingAction({ request }) {
    let obj = Object.fromEntries(await request.formData(request))
    return obj;
}