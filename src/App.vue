<template>
  <b-container>
    <b-form @submit.prevent="submit"  class="jing">
      <div class="card border-success mb-3" style="max-width: 120rem;">
        <div class="container">
          <div class="card-header">
            <h3>  Անձնական տվյալներ / Personla Inforamtion </h3>
          </div>
            <b-form-group id="exampleInputGroup1"
                            label="Անուն, ազգանուն / Name, surname "
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput1"
                            class="needs-validation" novalidate>
              <b-form-input id="exampleInput1"
                            type="text"
                            class="form-group col-md-6"
                            v-model="form.name"
                            name="Name"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup2"
                            label="Ծննդյան օր, ամիս, տարի / Date of birth "
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            class="form-group col-md-6"
                            type="date"
                            v-model="form.birth"
                            name="birth"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup3"
                            label="Սեռ /Gender"
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput3">
              <b-form-select id="exampleInput3"
                            :options="gender"
                            class="form-group col-md-3"
                            required
                            v-model="form.gender"
                            name="gender"
                            required>
              </b-form-select>
            </b-form-group>

            <b-form-group id="exampleInputGroup4"
                            label="Կրթություն / Education "
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput4">
              <b-form-input id="exampleInput4"
                            class="form-group col-md-6"
                            type="text"
                            v-model="form.edu"
                            name="education"
                            description="Ուս. հաստատություն, ֆակուլտետ, աստիճան, կուրս / University, faculty, degree, year"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup5"
                            label="Մասնագիտություն / Profession "
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput5">
              <b-form-input id="exampleInput2"
                            class="form-group col-md-6"
                            type="text"
                            v-model="form.prof"
                            name="profession"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group
                            label="Աշխատանք / Work "
                            horizontal
                            :label-cols="4"
                            breakpoint="md">
              <b-form-input
                            class="form-group col-md-6"
                            type="text"
                            v-model="form.work"
                            name="work"
                            description = "Աշխատավայր, հաստիք / Company, position">
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup6"
                            label="Հասցե / Address"
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput6">
              <b-form-input id="exampleInput6"
                            class="form-group col-md-6"
                            type="text"
                            v-model="form.address"
                            name="address"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup7"
                            label="Հեռախոս /Phone"
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput7">
              <b-form-input id="exampleInput7"
                            class="form-group col-md-6"
                            type="text"
                            v-model="form.phone"
                            name="phone">
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup8"
                            label="Բջջային / Mobile"
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput8">
              <b-form-input id="exampleInput8"
                            class="form-group col-md-6"
                            type="text"
                            v-model="form.mobile"
                            name="mobile"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup9"
                            label="Էլ. փոստ / E-mail "
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput9">
              <b-form-input id="exampleInput9"
                            class="form-group col-md-6"
                            type="email"
                            v-model="form.email"
                            name="email"
                            required>
              </b-form-input>
            </b-form-group>

          <b-button @click="onUpload"> Upload </b-button>
          <b-form-group id="photo"
                        label="Նկար / Photo"
                        horizontal
                        :label-cols="4"
                        breakpoint="md">
          <b-form-file  name ="photo"
                        type="file"
                        @change="onFileSelected"
                        plain
                        accept="image/*"
                        class="form-group col-md-6"
                        required>

          </b-form-file>
        </b-form-group>

            <b-form-group id="exampleInputGroup11"
                            label="Լեզուների իմացություն / Language skills"
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput11">
              <b-form-input id="exampleInput11"
                            class="form-group col-md-6"
                            type="text"
                            v-model="form.lang"
                            name="language"
                            required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup12"
                            label="Համակարգչային ծրագրերի իմացություն /Computer skills"
                            horizontal
                            :label-cols="4"
                            breakpoint="md"
                            label-for="exampleInput12">
              <b-form-input id="exampleInput12"
                            class="form-group col-md-6"
                            type="text"
                            v-model="form.comp"
                            name="computer"
                            required>
              </b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="card border-success mb-3" style="max-width: 120rem;">
          <div class="card-header">
            <h3> Հարցեր / Questions </h3>
          </div>
          <div class="card-body">
          <b-form-group
                        id="exampleInputGroup13"
                        label="Հակիրճ նկարագրեք Ձեզ (առավելագույնը 100 բառ): / Write a brief introduction about yourself (up to 100 words)."
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="3"
                        :max-rows="6"
                        label-for="exampleInput13">
          <b-form-textarea
                        id="exampleInput13"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q1"
                        name="qus1"
                        :rows="10"
                        :max-rows="6"
                        required>
            </b-form-textarea>
          </b-form-group>

        <b-form-group id="exampleInputGroup14"
                        label="Որո՞նք են Ձեր 3 ուժեղ և 3 զարգացման ենթակա կողմերը (առավելագույնը 50 բառ): / Describe your 3 strongest points and 3 points that you would like to improve (up to 50 words)."
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput14">
          <b-form-textarea id="exampleInput14"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q2"
                        name="qus2"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup15"
                        label="Ի՞նչ հատուկ հմտություններ ունեք (առավելագույնը 50 բառ): / What are your special skills (up to 50 words)?"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput15">
          <b-form-textarea id="exampleInput15"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q3"
                        name="qus3"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup16"
                        label="Պատմեք Ձեր հետաքրքրությունների և հոբբիների մասին (առավելագույնը 50 բառ): / Describe your interests and hobbies (up to 50 words)."
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput16">
          <b-form-textarea id="exampleInput16"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q4"
                        name="qus4"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup17"
                        label="Որո՞նք են Ձեր 3 ամենասիրած գրքերը և ինչո՞ւ: / What are your favorite 3 books and why?"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput17">
          <b-form-textarea id="exampleInput17"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q5"
                        name="qus5"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup18"
                        label="Ձեր պատկերացմամբ` ինչպիսի՞ն պետք է լինի կատարյալ աշխատանքային միջավայրը (առավելագույնը 50 բառ) / How do you imagine the perfect work environment (up to 50 words)?"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput18">
          <b-form-textarea id="exampleInput18"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q6"
                        name="qus6"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup19"
                        label="Ի՞նչ կարիերա եք ցանկանում կառուցել (առավելագույնը 50 բառ): / What is your desired career path? (up to 50 words)."
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput19">
          <b-form-textarea id="exampleInput19"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q7"
                        name="qus7"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup20"
                        label="Ի՞նչ եք հասկանում՝ թիմային աշխատանք ասելով, և ո՞րն է դրա կարևորությունը Ձեզ համար (առավելագույնը 50 բառ): / What is your understanding of team work, and how is it important for you (up to 50 words)?"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput20">
          <b-form-textarea id="exampleInput20"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q8"
                        name="qus8"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup21"
                        label="Ի՞նչ է Ձեզ համար կամավորական աշխատանքը: Ւ՞նչ կամավորական/հասարակական ծրագրերի եք մասնակցել նախկինում (առավելագույնը 50 բառ) / What does voluntary work mean to you. In which voluntary/social programs did you participate (up to 50 words)?"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput21">
          <b-form-textarea id="exampleInput21"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q9"
                        name="qus9"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup22"
                        label="Ինչո՞ւ եք ցանկանում մասնակցել Պրակտիկայի ծրագրին, ի՞նչ սպասելիքներ ունեք (առավելագույնը 50 բառ): / Why would you like to participate in the Internship program, and what are your expectations (up to 50 words)?"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput22">
          <b-form-textarea id="exampleInput22"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q10"
                        name="qus10"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup23"
                        label="Ի՞նչ ներդրում Դուք կարող եք ունենալ Պրակտիկայի ծրագրում (առավելագույնը 50 բառ): / What can you give to the Internship program (up to 50 words)?"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput23">
          <b-form-textarea id="exampleInput23"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q11"
                        name="qus11"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleInputGroup24"
                        label="Ինչպե՞ս եք տեղեկացել Պրակտիկայի ծրագրի մասին և արդյոք նախկինում մասնակցե՞լ եք «Լույսի» որևէ ծրագրի: / How did you hear about the Luys Internship? Have you previously participated in any of Luys programs?"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        :rows="10"
                        :max-rows="6"
                        label-for="exampleInput24">
          <b-form-textarea id="exampleInput24"
                        class="form-group col-md-6"
                        type="textarea"
                        v-model="form.q12"
                        name="qus12"
                        :rows="10"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="exampleccelect"
                    label="Խնդրում ենք նշել՝ Պրակտիկայի որ փուլերն ու հերթափոխերն են Ձեզ առավել հարմար: / Please note which internship phases and work shifts are most convenient for you."
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label-for="exampleselect1">
      <b-form-select
                    :options="options"
                    class="form-group col-md-6"
                    required
                    v-model="form.selected"
                    name="time"
                    required>
        </b-form-select>
      </b-form-group>
    </div>
  </div>
</div>
<div class="card border-success mb-3" style="max-width: 120rem;">
  <div class="card-header">
  <h3> Դիմել / Submit Application </h3>
  </div>
  <div>
    <b-button type="submit" variant="primary">Դիմել / Submit Application</b-button>
  </div>
</div>
</b-form>
</b-container>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'App',
  data () {
    return {
        profpic: '',
        imageUrl: '',
        image: null,
        form: {
        name: '',
        birth: '',
        gender: null,
        edu: '',
        prof: '',
        work: '',
        address: '',
        phone: '',
        mobile: '',
        email: '',
        selectedFile: null,
        lang: '',
        comp: '',
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: '',
        q12: '',
        selected: null,

      },
      options: [
        { value: null, text: 'Please select some item' },
        { value: '1', text: 'Հունվար-Ապրիլ / January-April 09:30 - 12:30' },
        { value: '2', text: 'Հունվար-Ապրիլ / January-April 12:20 - 15:30' },
        { value: '3', text: 'Հունվար-Ապրիլ / January-April 15:30 - 18:30' },
        { value: '4', text: 'Մայիս - Օգոստոս / May - August 09:30 - 12:30', },
        { value: '5', text: 'Մայիս - Օգոստոս / May - August 12:20 - 15:30', },
        { value: '6', text: 'Մայիս - Օգոստոս / May - August 15:30 - 18:30', },
        { value: '7', text: 'Սեպտեմբեր - Դեկտեմբեր / September - December 09:30 - 12:30', },
        { value: '8', text: 'Սեպտեմբեր - Դեկտեմբեր / September - December 12:30 - 15:30', },
        { value: '9', text: 'Սեպտեմբեր - Դեկտեմբեր / September - December 15:30 - 18:30', }
      ],
      gender: [
        { text: 'Select One', value: null },
        'Male', 'Female'
      ],
      show: true
    }
  },
  methods: {
    onFileSelected (event){
      const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please choose a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.profpic = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
        firebase.storage().ref('/images/').put(this.image)
        .then(fileData => {
          this.form.imageUrl = fileData.metadata.downloadURLs[0]
          // console.log(fileData.metadata.downloadURLs[0])
        })
    },
    onUpload () {
      console.log(this.form.imageUrl)
    },
    submit () {
      const person = {
        name: this.form.name,
        birth: this.form.birth,
        gender: this.form.gender,
        edu: this.form.edu,
        prof: this.form.prof,
        work: this.form.work,
        address: this.form.address,
        phone: this.form.phone,
        mobile: this.form.mobile,
        email: this.form.email,
        imageUrl: this.form.imageUrl,
        lang: this.form.lang,
        comp: this.form.comp,
        q1: this.form.q1,
        q2: this.form.q2,
        q3: this.form.q3,
        q4: this.form.q4,
        q5: this.form.q5,
        q6: this.form.q6,
        q7: this.form.q7,
        q8: this.form.q8,
        q9: this.form.q9,
        q10: this.form.q10,
        q11: this.form.q11,
        q12: this.form.q12,
        selected: this.form.selected
      }

      console.log(person)
      firebase.database().ref().push(person)
      .then(() => {
        // location.reload()
        window.alert('success')
      })
      .catch((error) => {
        window.alert('error')
        console.log(error)
          })
        }
      }
    }


</script>
