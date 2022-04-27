export const DO_LIKE = "DO_LIKE";
export const DO_DISLIKE = "DO_DISLIKE";

 function doLike(ruleId) {
    
    return {
        type: DO_LIKE,
        ruleId
    }

}

export function fetchLikes(ruleId) {
    return function (dispatch) {
      fetch(`/rest/rules/${ruleId}/likes`).then(async function(res) {
        console.log(' rules-actions fetch like res ==> :', res)
        const likes = await res.json()
        dispatch(doLike(likes));
      });
    };
  }



function doDislike(ruleId) {
    return {
        type: DO_LIKE,
        ruleId
    }

}

export function fetchDislikes(ruleId) {
    return function (dispatch) {
      fetch(`/rest/rules/${ruleId}/dislikes`).then(async function(res) {
        console.log(' rules-actions fetch dislikes res ==> :', res)
        const dislikes = await res.json()
        dispatch(doDislike(dislikes));
      });
    };
  }